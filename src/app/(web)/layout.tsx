import React from "react"


export default function WebLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <section>
      {/* <NavBar /> */}
      {children}
    </section>
  )

}