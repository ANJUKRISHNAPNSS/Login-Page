import { Tab, Tabs } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function SideBar() {
    const [selected, setSelected] = useState(0)
    const history = useHistory()
    const handle = (_, value) => {
        console.log({ value })
        setSelected(value)
        if (value === 0) {
            history.push('/mainPage')
        } else {
            history.push('/info')
        }

    }

    return (
        <div>
            <Tabs value={selected} onChange={handle}>
                <Tab
                    label={'Main page'}
                />
                <Tab
                    label={'Company Info'}
                />
            </Tabs>
        </div>
    )
}
export default SideBar