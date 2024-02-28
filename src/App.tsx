import { useState } from "react";
import { usePersonStore } from "./store";

import "./App.css";

function App() {
  const firstName = usePersonStore((state) => state.firstName);
  const updateFirstName = usePersonStore((state) => state.updateFirstName);
  const lastName = usePersonStore((state) => state.lastName);
  const updateLastName = usePersonStore((state) => state.updateLastName);

  return (
    <main>
      <form action="">
        <p>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            onChange={(event) => updateFirstName(event.currentTarget.value)}
            value={firstName}
          />
        </p>
        <p>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            onChange={(event) => updateLastName(event.currentTarget.value)}
            value={lastName}
          />
        </p>
      </form>
    </main>
  );
}

export default App;
