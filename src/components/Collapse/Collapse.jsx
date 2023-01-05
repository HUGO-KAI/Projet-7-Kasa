import { useState } from 'react'
import CollapseStyle from './Collapse.module.scss'
import arrow from '../../assets/arrow_down.png'

const Collapse = ({title, content}) => {
    const [isOpen, setIsOpen] = useState(false)
	return isOpen ? (
		<div className={CollapseStyle.collapse}>
			<div onClick={() => setIsOpen(false)} className = {CollapseStyle.collapse_bar} >
                <h2 className = {CollapseStyle.collapse_title}>{title}</h2>
                <div className={CollapseStyle.collapse_arrow__open}>
					<img src={arrow} alt='arrow open'></img>
				</div>
			</div>
			<div className={CollapseStyle.collapse_content__container} >
				<h3 className={CollapseStyle.collapse_content}>{content}</h3>
			</div>	
		</div>
	) : (
		<div onClick={() => setIsOpen(true)} className = {CollapseStyle.collapse_bar} >
            <h2 className = {CollapseStyle.collapse_title}>{title}</h2>
            <div className={CollapseStyle.collapse_arrow__close}><img src={arrow} alt='arrow close'></img></div>
        </div>
	)
}

export default Collapse;