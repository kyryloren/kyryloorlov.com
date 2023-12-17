'use client'

import { useRef } from 'react'
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
import { Suspense } from 'react'
import Scene from './scene'

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
          duration: 1,
          stagger: 0.02,
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
                  <a
                    href="https://www.linkedin.com/in/kyryloren"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="reveal-content-1"
                  >
                    LinkedIn
                  </a>
                </div>
                <div className="overflow">
                  <a
                    href="https://www.instagram.com/kyryloren"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="reveal-content-1"
                  >
                    Instagram
                  </a>
                </div>
                <div className="overflow">
                  <a
                    href="https://www.github.com/kyryloren"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="reveal-content-1"
                  >
                    GitHub
                  </a>
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
