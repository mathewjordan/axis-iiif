import axios from "axios";
import Request from "axios-request-handler";

export async function getOrderedCollection(id: string) {
  try {
    const response = await axios.get(id);
    if (response?.data) return response?.data;
  } catch (err) {
    console.error("Error requesting OrderedCollection", id);
    return null;
  }
}

export async function getOrderedCollectionPage(id: string) {
  const page = new Request(id);

  try {
    const response = await page.poll(60000).get();
    return response?.data;
  } catch (err) {
    console.error("Error requesting OrderedCollectionPage", id);
    return null;
  }
}
