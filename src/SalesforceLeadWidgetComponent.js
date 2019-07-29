import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("SalesforceLeadWidget", ({ widget }) => {
  const classNames = ["row"];

  if (widget.get("backgroundColor") === "transparent") {
    classNames.push("card-white-transparent");
  } else {
    classNames.push("floating-label", "card-theme", "card", "card-padding");
  }

  return (
    <div className={classNames.join(" ")}>
      <form 
        className="row" 
        action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
        method="POST"
      >
        <input type="hidden" name="oid" value={widget.get("orgID")} />
        <input type="hidden" name="retURL" value={widget.get("returnURL")} />

        {/* Uncomment to use debugger
          <input type="hidden" name="debug" value="1" />
          <input type="hidden" name="debugEmail"  
            value="YOUR_EMAIL_GOES_HERE" />
        */}    
        
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="first_name">Your name</label>
            <input
              className="form-control form-control-lg"
              id="first_name"
              name="first_name"
              maxLength="40"
              placeholder="First name"
              type="text"
              required
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="last_name">Family name</label>
            <input
              className="form-control form-control-lg"
              id="last_name"
              name="last_name"
              maxLength="80"
              placeholder="Family name"
              type="text"
              required
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              className="form-control form-control-lg"
              id="email"
              name="email"
              maxLength="80"
              placeholder="Email"
              type="email"
              required
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="company">Company (optional)</label>
            <input
              className="form-control form-control-lg"
              id="company"
              name="company"
              maxLength="40"
              placeholder="Company"
              type="text"
            />
          </div>
        </div>
        <div className="col-sm-12">
          <div className="form-group">
            <label htmlFor="description">Message</label>
            <textarea
              className="form-control form-control-lg"
              rows="3"
              id="description"
              name="description"
              placeholder="Your Message..."
            />
          </div>
          {widget.get("agreementText") && (
            <div className="form-group form-check">
              <input
                className="form-check-input"
                id="agreementTextCheck"
                type="checkbox"
                name="contactAgreement"
                value={widget.get("agreementText")}
                required
              />
              <label className="form-check-label" htmlFor="agreementTextCheck">
                {widget.get("agreementText")}
              </label>
            </div>
          )}
          <button className="btn btn-primary btn-block" type="submit" name="submit">
            {widget.get("buttonText") || "send message"}
          </button>
        </div>
      </form>
    </div>
  );
});
