function JobItem(props) {
    return <div>
        <div>{props.title}</div>
        <div>{props.company}</div>
        <div>{props.posted}</div>
    </div>
}

export default JobItem;