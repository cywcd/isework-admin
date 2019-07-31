import React, { Component } from 'react';
import {  Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components'

const primaryButton = 0;
const grid = 8;
const colors = {
  N10: '#101010',
  B50: '#505050',
  B200: '#200200',
  N900: '#900900',
  N90: '#909090'
}
const borderRadius = 4


const getBackgroundColor = ({
  isSelected,
  isGhosting,
}) => {
  if (isGhosting) {
    return colors.N10;
  }

  if (isSelected) {
    return colors.B50;
  }

  return colors.N10;
};

const getColor = ({ isSelected, isGhosting }) => {
  if (isGhosting) {
    return 'darkgrey';
  }
  if (isSelected) {
    return colors.B200;
  }
  return colors.N900;
};

const Container = styled.div`
  background-color: ${props => getBackgroundColor(props)};
  color: ${props => getColor(props)};
  padding: ${grid}px;
  margin-bottom: ${grid}px;
  border-radius: ${borderRadius}px;
  font-size: 18px;
  border: 1px solid ${colors.N90};
  ${props =>
    props.isDragging ? `box-shadow: 2px 2px 1px ${colors.N90};` : ''} ${props =>
    props.isGhosting
      ? 'opacity: 0.8;'
      : ''}

  /* needed for SelectionCount */
  position: relative;

  /* avoid default outline which looks lame with the position: absolute; */
  &:focus {
    outline: none;
    border-color: ${colors.N200};
  }
`;
/* stylelint-disable block-no-empty */
const Content = styled.div``;
/* stylelint-enable */
const size = 30;

const SelectionCount = styled.div`
  right: -${grid}px;
  top: -${grid}px;
  color: ${colors.N0};
  background: ${colors.N200};
  border-radius: 50%;
  height: ${size}px;
  width: ${size}px;
  line-height: ${size}px;
  position: absolute;
  text-align: center;
  font-size: 0.8rem;
`;

const keyCodes = {
  enter: 13,
  escape: 27,
  arrowDown: 40,
  arrowUp: 38,
  tab: 9,
};

class MultiDrag extends Component {
  onKeyDown = (
    event,
    // 我们会在这里打上 猴子补丁
    provided,
    snapshot,
  ) => {
    if (provided.dragHandleProps) {
      provided.dragHandleProps.onKeyDown(event);
    }

    if (event.defaultPrevented) {
      return;
    }

    if (snapshot.isDragging) {
      return;
    }

    if (event.keyCode !== keyCodes.enter) {
      return;
    }

    // 为了选择，我们使用此事件 we are using the event for selection
    event.preventDefault();

    this.performAction(event);
  };

  // 使用 onClick ，若时个拖动行为，将有效阻止
  onClick = (event) => {
    if (event.defaultPrevented) {
      return;
    }

    if (event.button !== primaryButton) {
      return;
    }

    // 标记此事件被使用了
    event.preventDefault();

    this.performAction(event);
  };

  // 确定是否使用了组密钥中，特定于平台的切换选择
  wasToggleInSelectionGroupKeyUsed = (event) => {
    const isUsingWindows = navigator.platform.indexOf('Win') >= 0;
    return isUsingWindows ? event.ctrlKey : event.metaKey;
  };

  // 确定是否使用了multiSelect键
  wasMultiSelectKeyUsed = (event) => event.shiftKey;

  performAction = (event) => {
    const {
      task,
      toggleSelection,
      toggleSelectionInGroup,
      multiSelectTo,
    } = this.props;

    if (this.wasToggleInSelectionGroupKeyUsed(event)) {
      toggleSelectionInGroup(task.id);
      return;
    }

    if (this.wasMultiSelectKeyUsed(event)) {
      multiSelectTo(task.id);
      return;
    }

    toggleSelection(task.id);
  };

  render() {
    const task = this.props.task;
    const index = this.props.index;
    const isSelected = this.props.isSelected;
    const selectionCount = this.props.selectionCount;
    const isGhosting = this.props.isGhosting;
    return (
      <Draggable draggableId={task.id} index={index}>
        {(provided, snapshot) => {
          const shouldShowSelection =
            snapshot.isDragging && selectionCount > 1;

          return (
            <Container
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              onClick={this.onClick}
              onTouchEnd={this.onTouchEnd}
              onKeyDown={(event) =>
                this.onKeyDown(event, provided, snapshot)
              }
              isDragging={snapshot.isDragging}
              isSelected={isSelected}
              isGhosting={isGhosting}
            >
              <Content>{task.content}</Content>
              {shouldShowSelection ? (
                <SelectionCount>{selectionCount}</SelectionCount>
              ) : null}
            </Container>
          );
        }}
      </Draggable>
    );
  }
}

export default MultiDrag