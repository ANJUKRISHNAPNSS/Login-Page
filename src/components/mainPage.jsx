import { ArrowBackIos, ArrowBackIosOutlined, ArrowBackIosSharp, ArrowDownward, ArrowDownwardRounded, ArrowDownwardSharp, ArrowDropDown, ArrowDropDownCircle, ArrowDropUp, ArrowForwardIosTwoTone, ArrowUpward } from "@material-ui/icons";
import { Button, Icon, Tab } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import SideBar from "./sideBar";


function MainPage(props) {
    const { datas } = props
    console.log({ datas })

    return (
        <div style={{ alignItems: 'center' }}>
            <SideBar />
            {datas !== null && datas.map(element =>
                <div><div style={{ display: 'flex', flexDirection: 'row', marginTop: 20, marginLeft: 500 }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div><ArrowDropUp style={{ width: 80, height: 150 }} /></div>
                        <div style={{ marginLeft: 30 }}>{element.totalVoted}</div>
                        <div><ArrowDropDown style={{ width: 80, height: 150 }} /></div>
                        <div style={{ marginLeft: 23 }}><b>Votes</b></div>
                    </div>
                    <img src={element.poster} style={{ height: 300, width: 200 }} />
                    <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 20 }}>
                        <h1>{element.title}</h1>
                        <div>
                            <div style={{ display: 'flex', flexDirection: 'row', fontSize: 20 }}><div><b>Genre:</b></div><div>{element.genre}</div></div>
                            <div style={{ display: 'flex', flexDirection: 'row', fontSize: 20 }}><div><b>Director:</b></div><div>{element.director}</div></div>
                            <div style={{ display: 'flex', flexDirection: 'row', fontSize: 20 }}><div><b>Starring:</b></div><div>{element.stars}</div></div>
                            {/* <div style={{ display: 'flex', flexDirection: 'row', fontSize: 20 }}><div><b>Genre:</b></div><div>{element.genre}</div></div> */}
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', fontSize: 20, marginTop: 60 }}>
                            <div>Mins|</div>
                            <div>{element.language}|</div>
                            <div>{element.releasedDate}</div>

                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', fontSize: 20, marginTop: 20 }}>
                            <div>{element.pageViews} views |</div>
                            <div> Voted by {element.totalVoted}|</div>
                            <div>{element.releasedDate}</div>

                        </div>
                    </div>
                </div><Button style={{ backgroundColor: 'blue', color: 'white', marginLeft: 500, width: 600 }}>Watch Trailer</Button></div>

            )}
        </div>


    )
}

const mapStateToProps = (state) => {
    return {
        datas: state.dashboardReducers.datas,
    }
}
export default connect(mapStateToProps, null)(MainPage)