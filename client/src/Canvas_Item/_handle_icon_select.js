function _handle_icon_select(now_icon){
    this._icons.forEach(icon=>{
        if(icon !== now_icon && icon.active)
            icon.active = false;
    });
};

module.exports = _handle_icon_select;