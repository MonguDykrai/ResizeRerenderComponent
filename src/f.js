function useResize(autoResize === false) {
  if (autoResize === false) return { visible: true };
  const [visible, setVisible] = useState(false)
const debounceResize = () => {
    setVisible(true)
}
  const resize = useCallback((e) => {
    
}, [])
  useEffect(() => {
      window.addEventListener("resize", debounceResize)
      return () => {
          window.removeEventListener("resize", debounceResize)
      }
}, []);
  return {
      visible,
  }
  
}
function LandMark(props) {
  const { visible } = useResize(props.autoResize)
  if (visible === false) return;
  return (
      
  )
}
<LandMark
onSrc=""
autoResize
/>