import React, { useState } from 'react'
import { Splitter, SplitterPanel } from 'primereact/splitter'
import { Card } from 'primereact/card'
import { DndProvider, useDrag, useDrop } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import './css_modules/SplitterWithCards.module.css'

const ItemTypes = {
  CARD: 'card',
}

// Draggable Card Component
const DraggableCard = ({ card, cardIndex, panelIndex, moveCard }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD,
    item: { cardIndex, panelIndex }, // Pass both card index and panel index
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  return (
    <div
      ref={drag}
      className={`draggable-card ${isDragging ? 'dragging' : ''}`}
    >
      <Card title={card.title}>
        <p>{card.content}</p>
      </Card>
    </div>
  )
}

// Drop Zone Component (SplitterPanel)
const DroppablePanel = ({ cards, moveCard, panelIndex, isOver }) => {
  const [{ canDrop }, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item) => {
      moveCard(item.cardIndex, item.panelIndex, panelIndex) // From one panel to another
    },
    collect: (monitor) => ({
      canDrop: monitor.canDrop(),
      isOver: monitor.isOver(),
    }),
  })

  return (
    <div
      ref={drop}
      className={`droppable-panel ${isOver ? 'panel-hover' : ''}`}
    >
      {cards.map((card, cardIndex) => (
        <DraggableCard
          key={cardIndex}
          card={card}
          cardIndex={cardIndex}
          panelIndex={panelIndex}
          moveCard={moveCard}
        />
      ))}
    </div>
  )
}

// Main Splitter Component
const SplitterWithCards = () => {
  const [panels, setPanels] = useState([
    [{ title: 'Card 1', content: 'Content 1' }],
    [{ title: 'Card 2', content: 'Content 2' }],
    [{ title: 'Card 3', content: 'Content 3' }],
    [{ title: 'Card 4', content: 'Content 4' }],
  ])

  const moveCard = (cardIndex, fromPanelIndex, toPanelIndex) => {
    if (fromPanelIndex === toPanelIndex) return // Prevent moving within the same panel

    // Make a copy of the panels
    const updatedPanels = [...panels]

    // Remove card from the original panel
    const cardToMove = updatedPanels[fromPanelIndex][cardIndex]
    updatedPanels[fromPanelIndex].splice(cardIndex, 1)

    // Add card to the target panel
    updatedPanels[toPanelIndex].push(cardToMove)

    setPanels(updatedPanels)
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <Splitter style={{ height: '400px' }}>
        {panels.map((cards, panelIndex) => (
          <SplitterPanel key={panelIndex}>
            <DroppablePanel
              cards={cards}
              panelIndex={panelIndex}
              moveCard={moveCard}
            />
          </SplitterPanel>
        ))}
      </Splitter>
    </DndProvider>
  )
}

export default SplitterWithCards
