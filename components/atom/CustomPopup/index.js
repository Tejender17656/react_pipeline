function CustomPopup({ title, description, buttonText, showPopup, setShowPopup, handleConfirm, popUpWidth = "max-w-xl" }) {
    return (
        <>
            <div id="defaultModal" tabIndex="-1" aria-hidden="true" className={`${showPopup ? "flex" : "hidden"} justify-center items-center fixed bg-[#000000c4] top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
                <div className={`relative w-full ${popUpWidth} max-h-full`}>
                    <div className="relative bg-white rounded-lg shadow">
                        <div className="flex items-start justify-between p-4 bg-[#604691] border-b rounded-t">
                            <div></div>
                            <h3 className="text-xl font-semibold text-white">
                                {title || "Confirmation"}
                            </h3>
                            <button onClick={() => setShowPopup(prev => !prev)} type="button" className="h-[25px] w-[25px] text-gray-400 bg-transparent bg-white hover:text-gray-900 rounded-full text-sm p-1.5 inline-flex items-center" data-modal-hide="defaultModal">
                                <svg aria-hidden="true" className="w-5 h-5" fill="#604691" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="p-6 space-y-6">
                            <p className="text-base text-center leading-relaxed text-gray-800">
                                {description || "Are you sure you want to proceed?"}
                            </p>
                        </div>
                        <div className="flex items-center p-4 space-x-2 border-t border-gray-200 rounded-b justify-center">
                            <button onClick={() => { setShowPopup(prev => !prev); handleConfirm(); }} data-modal-hide="defaultModal" type="button" className="text-white bg-[#604691] hover:bg-[#45326a] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center">{buttonText || "Confirm"}</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CustomPopup