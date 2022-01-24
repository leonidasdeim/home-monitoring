/*eslint-disable*/
import React from "react";
import { useSelector } from 'react-redux';
import { selectAreas, selectAreasIsNotEmpty } from 'features/areaData/areaDataSlice';
import { selectHeadText } from 'features/uiData/uiDataSlice';
import { Link } from "react-router-dom";

// import NotificationDropdown from "components/Dropdowns/NotificationDropdown.js";
import UserDropdown from "components/Dropdowns/UserDropdown.js";

export default function Sidebar() {
    const [collapseShow, setCollapseShow] = React.useState("hidden");
    const headText = useSelector(selectHeadText);
    const areaItems = useSelector(selectAreas);
    const areasIsNotEmpty = useSelector(selectAreasIsNotEmpty);
    const areaObjects = areasIsNotEmpty ? areaItems.map((item, i) => <AreaObject key={i} item={item} collapse={setCollapseShow} />) : '';

    return (
        <>
            <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
                <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
                    {/* Toggler */}
                    <button
                        className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                        type="button"
                        onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                    {/* Brand */}
                    <div
                        className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                        to="/"
                    >
                        {headText !== "" ? headText : "Home Sensors"}
                    </div>
                    {/* User */}
                    <ul className="md:hidden items-center flex flex-wrap list-none">
                        <li className="inline-block relative">
                            {/* <NotificationDropdown /> */}
                        </li>
                        <li className="inline-block relative">
                            <UserDropdown />
                        </li>
                    </ul>
                    {/* Collapse */}
                    <div
                        className={
                            "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
                            collapseShow
                        }
                    >
                        {/* Collapse header */}
                        <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
                            <div className="flex flex-wrap">
                                <div className="w-6/12">
                                    <div
                                        className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                                        to="/"
                                    >
                                        Home Sensors
                                    </div>
                                </div>
                                <div className="w-6/12 flex justify-end">
                                    <button
                                        type="button"
                                        className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                                        onClick={() => setCollapseShow("hidden")}
                                    >
                                        <i className="fas fa-times"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Form */}
                        {/* <form className="mt-6 mb-4 md:hidden">
                            <div className="mb-3 pt-0">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="border-0 px-3 py-2 h-12 border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                                />
                            </div>
                        </form>
                        <hr className="my-4 md:min-w-full" /> */}
                        {/* Heading */}
                        {/* <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                            Main
                        </h6> */}
                        {/* Navigation */}

                        <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                            <li className="items-center">
                                <Link onClick={() => setCollapseShow("hidden")}
                                    className={
                                        "text-xs uppercase py-3 font-bold block " +
                                        (window.location.href.indexOf("/admin/dashboard") !== -1
                                            ? "text-lightBlue-500 hover:text-lightBlue-600"
                                            : "text-blueGray-700 hover:text-blueGray-500")
                                    }
                                    to="/admin/dashboard"
                                >
                                    <i
                                        className={
                                            "fas fa-tv mr-2 text-sm " +
                                            (window.location.href.indexOf("/admin/dashboard") !== -1
                                                ? "opacity-75"
                                                : "text-blueGray-300")
                                        }
                                    ></i>
                                    Dashboard
                                </Link>
                            </li>

                            <li className="items-center">
                                <Link onClick={() => setCollapseShow("hidden")}
                                    className={
                                        "text-xs uppercase py-3 font-bold block " +
                                        (window.location.href.indexOf("/admin/settings") !== -1
                                            ? "text-lightBlue-500 hover:text-lightBlue-600"
                                            : "text-blueGray-700 hover:text-blueGray-500")
                                    }
                                    to="/admin/settings"
                                >
                                    <i
                                        className={
                                            "fas fa-tools mr-2 text-sm " +
                                            (window.location.href.indexOf("/admin/settings") !== -1
                                                ? "opacity-75"
                                                : "text-blueGray-300")
                                        }
                                    ></i>
                                    Settings
                                </Link>
                            </li>

                        </ul>

                        {/* Divider */}
                        <hr className="my-4 md:min-w-full" />
                        { areasIsNotEmpty && 
                            <>
                                <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                                    Areas
                                </h6>

                                <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
                                    {areaObjects}
                                </ul>

                                <hr className="my-4 md:min-w-full" />
                            </>
                        }

                    </div>
                </div>
            </nav>
        </>
    );
}

function AreaObject(props) {
    return (
        <li className="items-center">
        <Link onClick={() => props.collapse("hidden")}
            className={
                "text-xs uppercase py-3 font-bold block " +
                (window.location.href.indexOf("/admin/area/" + props.item.id) !== -1
                    ? "text-lightBlue-500 hover:text-lightBlue-600"
                    : "text-blueGray-700 hover:text-blueGray-500")
            }
            to={"/admin/area/" + props.item.id}
        >
            <i
                className={
                    "fas mr-2 text-sm " +
                    (window.location.href.indexOf("/admin/area/" + props.item.id) !== -1
                        ? "fa-door-open opacity-75"
                        : "fa-door-closed text-blueGray-300")
                }
            ></i>
            {props.item.name}
        </Link>
    </li>
    );
}
