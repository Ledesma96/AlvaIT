const ToggleMenu = ({open, handleMenu}) => {

    return (
        <div className='container_toggle_menu' onClick={handleMenu}>
            <span className={`${open && 'open_top'} span_top`}></span>
            <span className={`${open && 'open_middle'} span_middle`}></span>
            <span className={`${open && 'open_bottom'} span_bottom`}></span>
        </div>
    )
}

export default ToggleMenu