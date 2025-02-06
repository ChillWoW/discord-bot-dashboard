interface ClientConfig {
  token: string;
  mongodb: string;
  name: string;
  ownerId: string;
}

const client: ClientConfig = {
  token:
    "MTI3ODY5MjY2MTc1MDE0MDkzOA.GwsMgP.ajqxBk5QjKPbzSq87ekH9YAcMX1E_PVzsQRnKE",
  mongodb:
    "mongodb+srv://dcbotti:7Lh0DGJRRJMEeptv@cluster0.z7rrn.mongodb.net/Echelon?retryWrites=true&w=majority",
  name: "Echelon",
  ownerId: "452848865549352960",
};

export default client;
