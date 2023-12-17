'use client'

import styled from 'styled-components'
import { media } from 'styles'

export const SectionWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
`
export const ContentWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  padding: 2vw 0;

  ${media.desktop`padding: 2rem 0;`}
`
export const TextWrapper = styled.div`
  max-width: 70%;
  padding-bottom: 4vw;
  z-index: 999;
  mix-blend-mode: difference;

  ${media.desktop`
    max-width: 900px;
    padding-bottom: 3rem;
  `}
`
export const LinkWrapper = styled.div`
  display: flex;
  gap: 4vw;
  z-index: 999;
  mix-blend-mode: difference;
  font-size: 1vw;
  line-height: 1.2;
  opacity: 0.5;
  color: ${({ theme }) => `rgb(${theme.text})`};

  ${media.desktop`
    gap: 3rem;
    font-size: 1rem;
  `}
  ${media.thone`
    gap: 0;
    justify-content: space-between;
  `}
`
export const Text = styled.div`
  font-size: 2.5vw;
  line-height: 1.2;
  color: ${({ theme }) => `rgb(${theme.text})`};

  ${media.desktop`font-size: 1.5rem;`}

  a {
    font-size: inherit;
    color: ${({ theme }) => `rgb(${theme.text})`};
    text-decoration: underline;
    transition: opacity 0.2s ease-in-out;

    &:hover {
      opacity: 0.5;
    }
  }
`
