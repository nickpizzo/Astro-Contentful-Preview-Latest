import contentful from "contentful";

const space = import.meta.env.CONTENTFUL_SPACE;
const accessToken = import.meta.env.CONTENTFUL_API_TOKEN;
const previewToken = import.meta.env.CONTENTFUL_PREVIEW_TOKEN;
const environment = import.meta.env.CONTENTFUL_ENVIRONMENT ?? "master";
const isPreview = import.meta.env.IS_PREVIEW ?? '';

// Standard Contentful client
const client = contentful.createClient({
    space,
    accessToken,
    environment,
}).withoutUnresolvableLinks;

// Preview Contentful client
const previewClient = contentful.createClient({
    space,
    accessToken: previewToken,
    environment,
    host: 'preview.contentful.com',
}).withoutUnresolvableLinks;

// Helper to switch between clients
function getClient(isPreview) {
    return isPreview === "true" ? previewClient : client;
}

export async function fetchAllBooks() {
    const client = getClient(isPreview);
    const response = await client.getEntries({
        content_type: "bookReferencePage",
        include: 10,
        order: "-sys.createdAt"
    });
    return response.items;
}

export async function fetchBookById(id) {
  const client = getClient(isPreview);
  const response = await client.getEntry(id);
  return response.fields;
}
