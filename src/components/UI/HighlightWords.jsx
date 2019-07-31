import React from 'react'
import { Card, Row, Col, Input, Checkbox } from 'antd'
import BreadcrumbComon from '../BreadcrumbComon'
import Highlighter from "react-highlight-words"
import latinize from 'latinize'
const { TextArea } = Input;

class HighlightWords extends React.Component{
  constructor (props) {
    super(props)

    this.state = {
      searchText: 'and or the',
      textToHighlight: `The dog is chasing the cat. Or perhaps they're just playing? When in the Course of human events it becomes necessary for one people to dissolve the political bands which have connected them with another and to assume among the powers of the earth, the separate and equal station to which the Laws of Nature and of Nature's God entitle them, a decent respect to the opinions of mankind requires that they should declare the causes which impel them to the separation.`,
      activeIndex: -1,
      caseSensitive: false
    }
  }
  render(){
    const { activeIndex, caseSensitive, searchText, textToHighlight } = this.state
    const searchWords = searchText.split(/\s/).filter(word => word)
    return(
      <div className="gutter-example">
        <BreadcrumbComon first="组件" second="关键字高亮" />
        <Row gutter={16}>
            <Col className="gutter-row" md={24}>
              <div className="gutter-box">
                <Card bordered={false}>
                  <Col md={24}>
                  <Highlighter
    highlightClassName="hight-style"
    searchWords={["and", "or", "the"]}
    autoEscape={true}
    textToHighlight="The dog is chasing the cat. Or perhaps they're just playing?"
  />
                  </Col>
                </Card>               
              </div>
            </Col>
        </Row>
        <Row gutter={16}>
            <Col className="gutter-row" md={24}>
              <div className="gutter-box">
                <Card bordered={false}>
                  <Col md={24}>
                  <div>
                    <div>
                      <h4>
                      搜索关键字，多个关键字用空格分隔
                      </h4>
                      <Input name='searchTerms' defaultValue={searchText} onChange={event => this.setState({ searchText: event.target.value })} placeholder="输入搜索关键字，多个关键字用空格分隔" />            
                    </div>
                    <div>
                      <h4 className="mt-m">
                        当前关键字索引位置
                      </h4>
                      <Input name='activeIndex' value={activeIndex} onChange={event => this.setState({ activeIndex: parseInt(event.target.value, 10) })} type='number' />            
                      
                    </div>
                    <div>
                      <h4 className="mt-m">
                      是否区分大小写?
                      </h4>
                      <Checkbox checked={caseSensitive}
                        name='caseSensitive'
                        onChange={event => this.setState({ caseSensitive: event.target.checked })}>是</Checkbox>                      
                    </div>

                    <h4 className="mt-m">
                      搜索内容
                    </h4>
                  
                    <TextArea name='textToHighlight' value={textToHighlight} onChange={event => this.setState({ textToHighlight: event.target.value })} rows={5} />

                    <h4 className="mt-m">
                      搜索关键字结果：
                    </h4>

                    <Highlighter
                      activeClassName="active-style"
                      activeIndex={activeIndex}
                      caseSensitive={caseSensitive}
                      highlightClassName="hight-style"
                      highlightStyle={{ fontWeight: 'normal' }}
                      sanitize={latinize}
                      searchWords={searchWords}
                      textToHighlight={textToHighlight}
                    />
                  </div>
                  </Col>
                </Card>               
              </div>
            </Col>
        </Row>
        <style>{`
        .active-style{
          background: #F48F42 !important
        }
        .hight-style{
          background:#FFD63F
        }
        `}</style>
      </div>
    )
  }
}

export default HighlightWords