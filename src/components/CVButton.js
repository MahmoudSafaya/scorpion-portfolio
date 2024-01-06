import React from 'react'

const CVButton = () => {
    return (
        <div>
            <button 
            type="button" 
            className="btn-btn">
                <a href='Mahmoud_Safaya_CV.pdf' download='MahmoudSafayaCV.pdf' target='_self' rel='noreferrer'>
                    Download My CV
                </a>
            </button>
        </div>
    )
}

export default CVButton