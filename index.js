// Calculator Program

const display = document.getElementById("display");

function appendToDisplayer(input)
{
    display.value += input;
}

function clearDisplay()
{
    display.value = "";
}

function calculate()
{
    try
    {
        display.value = eval(display.value);
    }
    catch(error)
    {
        display.value = "HATA";
    }
}