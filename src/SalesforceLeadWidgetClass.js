import * as Scrivito from "scrivito";

const SalesforceLeadWidget = Scrivito.provideWidgetClass("SalesforceLeadWidget", {
  attributes: {
    agreementText: "string",
    buttonText: "string",
    backgroundColor: ["enum", { values: ["white", "transparent"] }],
    orgID: "string",
    returnURL: "string",
  },
});

export default SalesforceLeadWidget;
