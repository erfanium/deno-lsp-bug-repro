import { Denzo } from "denzo";
import { myKey } from "./key.ts";

const denzo = new Denzo();

denzo.route<{ Response: string }>({
  method: "GET",
  url: "/*",
  handler(request) {
    const key = request.get(myKey);
    return key;
  },
});
