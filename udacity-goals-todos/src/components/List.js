const List = (props) => {
    return <ul> {
      props.items && props.items.map((item) => {
        return <li key={item.id}>
          <span
            style={{ textDecoration: item.complete ? 'line-through' : 'none' }}
            onClick={() => { props.toggleItem && props.toggleItem(item.id) }}>
            {item.name}
          </span>
          <button onClick={() => props.removeItem(item)}>X</button>
        </li>
      })
    }</ul>
  }

  export default List