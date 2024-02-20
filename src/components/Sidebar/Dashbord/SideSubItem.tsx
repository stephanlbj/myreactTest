

type sideItemProps ={
    Icon?:string
    item:string
}

const SideSubItem = ({item}:sideItemProps) => {

  return (
    <div>
        <p 
      
        className={`text-gray-400 text-[13px]`}>
            {item}
        </p>
    </div>
  )
}

export default SideSubItem