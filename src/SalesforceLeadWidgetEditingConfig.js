import * as Scrivito from "scrivito";

Scrivito.provideEditingConfig("SalesforceLeadWidget", {
  title: "Salesforce Lead Form",
  attributes: {
    agreementText: {
      title: "Agreement text",
      description: "Optional",
    },
    buttonText: {
      title: "Submit button text",
      description: "Default: send message",
    },
    backgroundColor: {
      title: "Background color",
      description: "Default: White",
      values: [
        { value: "white", title: "White" },
        { value: "transparent", title: "Transparent" },
      ],
    },
    orgID: {
      title: "Organization ID",
      description: "Provided in Salesforce Web-to-lead form snippet.",
    },
    returnURL: {
      title: "Return URL",
      description: "Page you want the visitor to go to after form submission.",
    },
  },
  properties: ["agreementText", "buttonText", "backgroundColor", "orgID", "returnURL"],
  initialContent: {
    buttonText: "send message",
    backgroundColor: "white",
  },
});
