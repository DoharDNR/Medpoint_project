import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js"

const supabase = createClient("https://bpcuxzxwxcgsmwkmszun.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJwY3V4enh3eGNnc213a21zenVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQxNjUwMDUsImV4cCI6MjA1OTc0MTAwNX0.rIGc9cAJ2wh01yqD8R_yOANVK8Lhv6HN8yTdzLcRJi4"
)

function App() {
  const [instruments, setInstruments] = useState([]);

  useEffect(() => {
    getInstruments();
  }, []);

  async function getInstruments() {
    const { data } = await supabase.from("instruments").select();
    setInstruments(data);
  }

  return (
    <ul>
      {instruments.map((instrument) => {
        <li key={instrument.name}>{instrument.name}</li>
      })}
    </ul>
  )
}

export default App;