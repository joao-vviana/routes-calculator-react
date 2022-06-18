import { Calculator, Display, CalculatorRow, CalculatorButton } from './styles'

type ToolProps = {
    title: string;
}

export default function Tool({ title }: ToolProps) {
    return (
        <>
            <h1>{ title }</h1>
            <Calculator>
                <Display>
                    2 + 2 = 4
                </Display>
                <CalculatorRow>
                    <CalculatorButton>C</CalculatorButton>
                    <CalculatorButton>+/-</CalculatorButton>
                    <CalculatorButton>%</CalculatorButton>
                    <CalculatorButton isOperation>/</CalculatorButton>
                </CalculatorRow>

                <CalculatorRow>
                    <CalculatorButton>7</CalculatorButton>
                    <CalculatorButton>8</CalculatorButton>
                    <CalculatorButton>9</CalculatorButton>
                    <CalculatorButton isOperation>X</CalculatorButton>
                </CalculatorRow>

                <CalculatorRow>
                    <CalculatorButton>4</CalculatorButton>
                    <CalculatorButton>5</CalculatorButton>
                    <CalculatorButton>6</CalculatorButton>
                    <CalculatorButton isOperation>-</CalculatorButton>
                </CalculatorRow>

                <CalculatorRow>
                    <CalculatorButton>1</CalculatorButton>
                    <CalculatorButton>2</CalculatorButton>
                    <CalculatorButton>3</CalculatorButton>
                    <CalculatorButton isOperation>+</CalculatorButton>
                </CalculatorRow>

                <CalculatorRow>
                    <CalculatorButton isLarge>0</CalculatorButton>
                    <CalculatorButton>,</CalculatorButton>
                    <CalculatorButton isOperation>=</CalculatorButton>
                </CalculatorRow>
            </Calculator>
        </>
    )
}