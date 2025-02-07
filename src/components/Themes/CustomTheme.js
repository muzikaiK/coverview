import React, {useState} from 'react';

const PreviewTheme = ({config}) => {
    const {title, author, font, icon, customIcon, bgColor, yiyan, ftColor,yyColor,pattern} = config;
    const [image, setImage] = useState(null);
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const objectUrl = URL.createObjectURL(file);
            setImage(objectUrl);
        }
    };

    const handleDivClick = () => {
        // 触发文件输入框的点击事件
        document.getElementById('fileInput').click();
    };

    return (
        <div className="bg-white">
            <div className="overflow-y-hidden flex flex-col" style={{backgroundColor: bgColor}}>
                <div className="flex flex-row items-center bg-white justify-center">
                    <div className="w-full">
                        {image ? (
                            <div className="relative flex group">
                                <div className="h-max w-full">
                                    <img src={image} className="object-cover" alt="preview"/>
                                </div>
                                <div className="h-full bg-gray-800/60 absolute top-0 right-0 left-0">
                                    <button
                                        onClick={() => setImage(null)}
                                        className="absolute top-2 right-2 cursor-pointer"
                                    >
                                        <svg
                                            className="group-hover:inline-block hidden w-8 h-8 text-gray-800 bg-white p-2 rounded-full z-10"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            ></path>
                                        </svg>
                                    </button>
                                    <div
                                        className={`${font} px-10 pt-28 text-left rounded-xl h-full p-4 flex flex-col`}
                                    >
                                        <h1 className="md:text-5xl text-center text-2xl font-bold"
                                            style={{ color: ftColor }}>{title}</h1>
                                        <div className="flex flex-col items-center py-10">
                                            <h2 className="text-xl font-semibold text-center text-white" style={{color: yyColor}}>
                                                {yiyan}</h2>
                                            <div className=" flex mx-6  p-6 rounded-xl items-center right">
                                                <h2 className={`${customIcon?'':'ml-12'} text-xl text-white ml-auto mr-2 font-semibold`}>{author}</h2>
                                                {
                                                    customIcon ?
                                                        <div className="w-12 h-12  text-white ">
                                                            <img src={customIcon} alt="img" className="rounded-full bg-white p-1 border-white" />
                                                        </div>
                                                        :
                                                        <div className="mr-auto text-white ml-2 items-center justify-center flex">
                                                            <i className={`devicon-${icon.value}-plain  p-4 dev-icon text-5xl`}></i>
                                                        </div>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="relative flex group">
                                <div
                                    className="h-max w-full flex flex-col p-20 py-28 bg-white items-center justify-center"
                                    style={{backgroundColor: bgColor}}
                                    onClick={handleDivClick}
                                >
                                    <input
                                        type="file"
                                        id="fileInput"
                                        className="text-xl cursor-pointer mb-4 bg-white rounded border text-center w-full"
                                        onChange={handleImageChange}
                                        style={{display: 'none'}} // 隐藏文件输入框
                                    />

                                    <div className="h-full  absolute top-0 right-0 left-0">
                                        <button
                                            onClick={() => setImage(null)}
                                            className="absolute top-2 right-2 cursor-pointer"
                                        >
                                            <svg
                                                className=" group-hover:inline-block hidden w-8 h-8 text-gray-800 bg-white p-2 rounded-full z-10"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M6 18L18 6M6 6l12 12"
                                                ></path>
                                            </svg>
                                        </button>
                                        <div
                                            className={`${font} px-10 pt-28 text-left rounded-xl h-full p-4 flex flex-col`}
                                        >
                                            <h1 className="md:text-5xl text-center text-2xl font-bold"
                                                style={{ color: ftColor }}>{title}</h1>
                                            <div className="flex flex-col items-center py-10">
                                                <h2 className="text-xl font-semibold text-center text-white" style={{color: yyColor}}>
                                                    {yiyan}</h2>
                                                <div className=" flex mx-6  p-6 rounded-xl items-center right">

                                                    <h2 className={`${customIcon?'':'ml-12'} text-xl text-white ml-auto mr-2 font-semibold`}>{author}</h2>
                                                    {
                                                        customIcon ?
                                                            <div className="w-12 h-12  text-white">
                                                                <img src={customIcon} alt="img" className="rounded-full bg-white p-1 border-white" />
                                                            </div>
                                                            :
                                                            <div className="mr-auto text-white ml-2 items-center justify-center flex">
                                                                <i className={`devicon-${icon.value}-plain  p-4 dev-icon text-5xl`}></i>
                                                            </div>
                                                    }

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PreviewTheme;