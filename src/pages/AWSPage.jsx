import React, { useEffect, useState } from "react"

import { API, Amplify } from "aws-amplify"
import * as queries from "../graphql/queries"
import * as mutations from "../graphql/mutations"
import * as subscriptions from "../graphql/subscriptions"

import awsconfig from "../aws-exports"
Amplify.configure(awsconfig)

const shopDetails = {
  id: "01",
  name: "FUCK YOU",
  description: "RUBBISH AWS HIHIHI",
}

const shopDetails2 = {
  id: "01",
  name: "FUCK YOU HIHIHI",
  description: "RUBBISH AWS NGK DLLM",
}

const itemDetails1 = {
  id: "0001",
  name: "cloth",
  description: "hi",
  shop: "01",
}

async function onCreateShop() {
  const a = await API.graphql({ query: mutations.createShop, variables: { input: shopDetails } })
  console.log(a)
}

async function onCreateItem() {
  const a = await API.graphql({ query: mutations.createItem, variables: { input: shopDetails } })
  console.log(a)
}

// https://github.com/aws-amplify/amplify-cli/issues/3237
// https://github.com/aws-amplify/amplify-cli/issues/3796#issuecomment-607519187
// https://github.com/aws-amplify/amplify-cli/issues/4111#issuecomment-655191971
async function onUpdate() {
  const a = await API.graphql({ query: mutations.updateShop, variables: { input: shopDetails2 } })
  console.log(a)
}

async function onQuery() {
  const allShops = await API.graphql({ query: queries.listShops })
  console.log(allShops)
  return allShops
}

async function onDelete() {
  const toDelete = {
    id: "01",
  }

  await API.graphql({ query: mutations.deleteShop, variables: { input: toDelete } })
}

export function AWSPage() {
  // useEffect(() => {
  //   const subscription = DataStore.observe(Shop).subscribe((msg) => {
  //     console.log(msg.model, msg.opType, msg.element)
  //   })

  //   return () => subscription.unsubscribe()
  // }, [])

  return (
    <div className="relative flex h-screen w-screen justify-center overflow-x-hidden overflow-y-scroll">
      <div className="my-0 flex w-full flex-row place-content-center items-center gap-10">
        <button className="rounded border-2 border-solid bg-stone-400 text-5xl hover:-translate-y-2" onClick={onCreate}>
          Create
        </button>

        <button className="rounded border-2 border-solid bg-stone-400 text-5xl hover:-translate-y-2" onClick={onUpdate}>
          Update
        </button>

        <button className="rounded border-2 border-solid bg-stone-400 text-5xl hover:-translate-y-2" onClick={onQuery}>
          Query
        </button>

        <button className="rounded border-2 border-solid bg-stone-400 text-5xl hover:-translate-y-2" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  )
}
