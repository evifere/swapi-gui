if (!process.env.HOSTNAME) {
  console.warn(
    "Warning: HOSTNAME environment variable not set, defaulting to localhost. Set '--env \"HOSTNAME=demo.com\"' when starting your container."
  );
}

export const HOSTNAME = process.env.HOSTNAME || `localhost`;

export const GraphQLEndpoint = `http://${HOSTNAME}`;
