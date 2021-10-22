function dimensions()
{
    let box=document.querySelector('.animate');
    let width=box.clientWidth;
    let height=box.clientHeight;
    if(width>height)
        {
            box.style.height=width;
            box.style.width=width;
        }
    else if(height>width)
        {
            box.style.width=height;
            box.style.height=height;
        }
}