import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
      <div>
        <h2>Home</h2>
        <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/planets">Planets</Link>
                    </li>
                    <li>
                        <Link to="/people">People</Link>
                    </li>
                </ul>
        </div>
      </div>
    );
  }