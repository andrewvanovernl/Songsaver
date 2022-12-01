import React from 'react';
import FieldItem from './FieldItem';

class Field extends React.Component {
    render() {
        const items = this.props.items
        const FieldItems = items.map(item => (
            <FieldItem
                key={item.id}
                item={item}
            />
        ))

        return (
            <div>
                <ul>
                    {FieldItems}
                </ul>
            </div>
        )
    }
}

export default Field;