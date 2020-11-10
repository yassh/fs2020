import React from "react"
import { NextPage } from "next"
import Link from "next/link"

const Page: NextPage = () => {
  return (
    <nav>
      <div>
        ☞{" "}
        <Link href="/single">
          <a>Single skating</a>
        </Link>
      </div>
      <div>
        ☞ <a>Pair skating</a>
      </div>
      <div>
        ☞ <a>Ice dance</a>
      </div>
    </nav>
  )
}

export default Page
