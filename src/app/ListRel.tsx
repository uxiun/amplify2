import { useAtom } from "jotai";
import { FC, useEffect } from "react";
import { allrelAtom } from "./jotai";
import { fetchListRel } from "./api/gen";
import { Rel } from "@/API";
import { Card, CardContent, Typography } from "@mui/material";

const ListRel: FC = () => {
  const [allrel, setAllrel] = useAtom(allrelAtom)
  useEffect(()=>{
    fetchListRel({}).then(res => {
      setAllrel(res)
      console.log("setAllRel()")
    })
  }, [])

  return(<>
    <div className="listRel">
      {allrel.map(rel => <EachRel key={rel.id} rel={rel}/> )}
    </div>
  </>)
}
export default ListRel

type JustRel = {
  rel: Rel
}
const EachRel: FC<JustRel> = ({rel}) => {
  return(<>
    <Card>
      <CardContent>
        <Typography variant="h6">{rel.name}</Typography>
        <Typography variant="subtitle1">{rel.id}</Typography>
        <Typography>{rel.parentID??""}</Typography>
      </CardContent>
    </Card>
  </>)
}