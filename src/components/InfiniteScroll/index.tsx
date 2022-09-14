import React, { memo, useRef, useCallback, ReactElement } from 'react';
// import { Basic } from 'components/stories/Button.stories';

type InfiniteScrollProps = {
  isLoading: boolean;
  records: any[];
  loadingText: string;
  end: boolean;
  endText: string;
  setRecords?: () => void;
}
export const InfiniteScroll = ({
  isLoading,
  records,
  loadingText,
  end,
  endText,
  setRecords
}: InfiniteScrollProps) => {
  const intObserver: any = useRef();
  const [count, setCount] = React.useState(0);

  const lastPostRef = useCallback((post: any) => {
    if (isLoading) return

    if (intObserver.current) intObserver.current.disconnect()

    intObserver.current = new IntersectionObserver(posts => {
      if (posts[0].isIntersecting) {
        setCount(count + 1)
        setRecords && setRecords();
      }
    })
    if (post) intObserver.current.observe(post)
  }, [isLoading])

  return (<div data-testid="infinite-scroll" >
    {records.map((obj: any, i: number) => {
      if (records.length === i + 1) {
        return (<div ref={lastPostRef} key={i}>
          {obj}
        </div>)
      }
      return <div key={i}>{obj}</div>
    })}
    {isLoading && <p className="center">
      {`${loadingText} || Loading More Posts...`}</p>}
    {end && <p className="center">
      {`${endText} || You have reached the end of the list...`}</p>}
    {/* <Basic /> */}
  </div>)
}

export default memo(InfiniteScroll);