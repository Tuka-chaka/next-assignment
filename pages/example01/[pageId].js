import { useEffect, useState } from "react"
import connect2db from "../../lib/mongodb"

const Page01 = (props) => {
    console.log(props.tests[0][0].title)

    const [info, setInfo] = useState("Empty")

    const getInfo = async () => {
        let response = await fetch("/api/hello", {
            method: "POST",
            body: 1
        })
        if (response.ok) {
            let a =  await response.json()
            setInfo(a.title)
        } 
    }

    useEffect(() => {
        getInfo()
    }, [])

    return (
        <div>
        Example {info}
        </div>
  )
}

export default Page01

export const getServerSideProps = async () => ({
    props: {
      tests: JSON.parse(
        JSON.stringify(
          await (await connect2db()).db.collection("tests").find({}).toArray()
        )
      )
    },
  });
