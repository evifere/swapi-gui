import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
      <div>
        <h2>Home</h2>
        <div>
                <ul>
                    <li>
                        <Link to="/planets">Planets</Link>
                    </li>
                    <li>
                        <Link to="/people">People</Link>
                    </li>
                    <li>
                        <Link to="/species">Species</Link>
                    </li>
                    <li>
                        <Link to="/starships">Starships</Link>
                    </li>
                </ul>
        </div>
      </div>
    );
  }