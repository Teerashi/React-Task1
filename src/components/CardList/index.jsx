import React from "react";
import Card from "../Card";
import './style.css';

class CardList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: [
                {
                    id: 1,
                    name: 'Валера',
                    lastName: 'Опель',
                    status: true
                },
                {
                    id: 2,
                    name: 'Костя',
                    lastName: 'Стакан',
                    status: true
                },
                {
                    id: 3,
                    name: 'Максим',
                    lastName: 'Локоть',
                    status: true
                },
                {
                    id: 4,
                    name: 'Катя',
                    lastName: 'Бицепс',
                    status: true
                },
                {
                    id: 5,
                    name: 'Коврик',
                    lastName: 'Антон',
                    status: true
                },
                {
                    id: 6,
                    name: 'Фонарь',
                    lastName: 'Шпак',
                    status: true
                },
            ]
        };

        this.buttonDisabled = {};
    }

    offUserBtn = (id) => {
        if (this.buttonDisabled[id]) {
            return;
        }

        this.setState((prevState) => ({
            cards: prevState.cards.map((card) =>
                card.id === id ? { ...card, status: !card.status } : card
            )
        }));

        this.buttonDisabled[id] = true;

        setTimeout(() => {
            this.setState((prevState) => ({
                cards: prevState.cards.filter((card) => card.id !== id)
            }));

            this.buttonDisabled[id] = false;
        }, 1000);
    };

    render() {
        const { cards } = this.state;

        const cardComponents = cards.map((card) => (
            <div key={card.id} className="cardList">
                <Card id={card.id} name={card.name} lastName={card.lastName} status={card.status} />
                <button
                    className="delBtn"
                    onClick={() => this.offUserBtn(card.id)}
                    disabled={this.buttonDisabled[card.id]}
                >
                    off
                </button>
            </div>
        ));

        return (
            <>
                {cardComponents}
            </>
        );
    }
}

export default CardList;