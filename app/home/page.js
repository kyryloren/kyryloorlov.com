'use client'

import { Suspense, useRef } from 'react'
import { Container } from 'styles'
import {
  ContentWrapper,
  LinkWrapper,
  SectionWrapper,
  Text,
  TextWrapper,
} from './styles'
import Div100vh from 'react-div-100vh'
import { useIsomorphicLayoutEffect } from 'react-use'
import gsap from 'gsap'
import Scene from './scene'
import { CustomLink } from 'components'

export default function Home() {
  const ref = useRef()
  const animText =
    'is an NYC-based designer and developer working on building highly-creative and functional websites, brands, and experiences. Current director at'

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline()

      tl.set('.section-wrapper', { opacity: 1 }).from(
        gsap.utils.toArray('.reveal-content-1'),
        {
          yPercent: 100,
          duration: 2,
          stagger: 0.03,
          ease: 'power3.inOut',
        },
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <>
      <Div100vh>
        <SectionWrapper className="section-wrapper">
          <Container>
            <ContentWrapper ref={ref}>
              <TextWrapper>
                <div className="overflow">
                  <Text className="reveal-content-1">
                    <a
                      href="https://folio.kyryloorlov.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Kyrylo Orlov
                    </a>
                    &nbsp;
                  </Text>
                </div>
                {animText.split(' ').map((word, index) => (
                  <div className="overflow" key={index}>
                    <Text className="reveal-content-1">{word}&nbsp;</Text>
                  </div>
                ))}
                <div className="overflow">
                  <Text className="reveal-content-1">
                    <a
                      href="https://outerlabs.studio"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Outer Labs Studio
                    </a>
                    .
                  </Text>
                </div>
              </TextWrapper>
              <LinkWrapper>
                <div className="overflow">
                  <CustomLink
                    className="reveal-content-1"
                    href="https://www.linkedin.com/in/kyryloren"
                  >
                    LinkedIn
                  </CustomLink>
                </div>
                <div className="overflow">
                  <CustomLink
                    className="reveal-content-1"
                    href="https://www.instagram.com/kyryloren"
                  >
                    Instagram
                  </CustomLink>
                </div>
                <div className="overflow">
                  <CustomLink
                    className="reveal-content-1"
                    href="https://www.github.com/kyryloren"
                  >
                    GitHub
                  </CustomLink>
                </div>
              </LinkWrapper>
            </ContentWrapper>
          </Container>
        </SectionWrapper>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Div100vh>
    </>
  )
}
