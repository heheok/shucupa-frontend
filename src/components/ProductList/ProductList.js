import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const categories = ['Tümü', 'Heykel', 'Fine Art', 'İlustrasyon'];

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: props.category
    };
    this.handleCategoryClick = this.handleCategoryClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.category !== this.props.category) {
      this.setState({ cateogry: nextProps.category });
    }
  }

  handleCategoryClick(cateogry) {
    console.log(cateogry);
    this.setState({ cateogry });
  }

  render() {
    const { category } = this.state;

    return (
      <ProductListWrapper>
        {categories.map((category, index) => (
          <div onClick={() => this.handleCategoryClick(category)}>
            {category}
          </div>
        ))}
      </ProductListWrapper>
    );
  }
}

ProductList.propTypes = {
  category: PropTypes.string
};
ProductList.defaultProps = {
  category: 'Tümü'
};

const ProductListWrapper = styled.div``;
