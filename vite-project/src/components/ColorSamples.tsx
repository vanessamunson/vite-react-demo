
type ColorProp = {
  shade: string
};

export default function ColorSamples({ shade }: ColorProp) {
  const twclass = `flex w-8 h-8 m-2  ${shade} hidden`
  return (
    <div>
      <div className={twclass}></div>
    </div>
  )
}
 