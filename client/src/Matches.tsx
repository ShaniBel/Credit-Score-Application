import React from "react";
import { Match } from "./api";

export const Matches = ({
  matches,
  search,
}: {
  matches: Match[];
  search: string;
}) => {
  console.log(matches);
  

  const filteredMatches = matches.filter((t) =>
    (
      t.borrower.user.firstName.toLowerCase() +
      t.borrower.user.lastName.toLowerCase()
    ).includes(search.trim().toLowerCase())
  );

  return (
    <ul className="matches">
      {filteredMatches.map((match) => (
        <li key={match.id} className="match">
          <h5 className="title">{match.companyName}</h5>
          <div className="matchData">
            <div>
              <p className="userDate">
                <b>Full Name:</b> {match.borrower.user.firstName}{" "}
                {match.borrower.user.lastName}
              </p>
              <p className="userDate">
                <b>Email:</b> {match.borrower.user.email}
              </p>
              <p className="userDate">
                <b>Amount Request: </b> {match.amountReq}
              </p>
              <p className="userDate">
                <b>Balance: </b> {match.borrower.financeData.balance}{" "}
                {match.borrower.financeData.currency}
              </p>
            </div>
          </div>
          <footer>
            <div className="meta-data">
              Created At {new Date(match.creationTime).toLocaleString()}
            </div>
          </footer>
        </li>
      ))}
    </ul>
  );
};
