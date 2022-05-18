import React from "react";
import { Table } from "./Table";

export const DescriptionHistory = () => {
  return (
    <div className="description-history">
      <div className="description">
        <h1>Description</h1>
        <div className="line-for-div"></div>
        <div className="scroll">
          <p>
            We can predict in advance the main argument of the critics - a
            housewife cannot be considered a real professional in each of the
            listed areas! But we do not argue with this, because the activities
            of a housewife include the skills of almost all of the listed
            professions. But that's not all - a housewife is a mother who tries
            her best to raise future worthy members of society, and does it on
            her own, without resorting to the help of surrogate mothers, whose
            services cost from 25 thousand dollars. Who, if not the state
            itself, should devote more time to them, protect their rights and,
            in the end, start playing for their hard work?! We urge you to
            respect and appreciate
          </p>
        </div>
      </div>
      <div className="history">
        <div>
          <h1>History</h1>
        </div>

        <Table />
      </div>
    </div>
  );
};
