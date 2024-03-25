import { useState } from "react";
import { TdelayCard, TStatus } from "../utils/types"

// This component uses predefined types from utils/types.ts

export default function Timer({dcard}: {dcard: TdelayCard}) {
  const [loading, setLoading] = useState<TStatus>("loading");
  setTimeout(() => {
    setLoading("success");
  }, dcard.delay);
  return (
    <div>
      <div className="flex flex-col items-center justify-center p-4 w-1/3 mt-12 mx-auto shadow-xl">
        <h1 className="text-lg">{dcard.title}</h1>
        <p>{dcard.description}</p>
        {
          loading === 'success' && 
          <p className="text-green-600">Ready!</p>
        }
      </div>
    </div>
  )
}

