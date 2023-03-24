# PaginatorX

## Pagination for Chakra-ui made easy

## [Demo](https://countries-proj.netlify.app/)
### - Depends on "@chakra-ui/icons" and "@chakra-ui/react"
### - How to use:
1. ### first import Paginator component and usePaginator hook

```javascript
import Paginator, { usePaginator } from 'paginatorx-chakra';
```

2. ### better to prepare your data array using useEffect or custom hook or any other effect fetch library like react query, and your data type in case you are using typescript

```javascript
import { TyourDataType } from 'your types folder';
const yourData: TyourDataType[] = useYourUseFetch;
```

3. ### feed usePaginator hook with data arry and count of items per page, the generic might not be needed because usePaginator will infer it from your data type

```javascript
const { pagesCount, selectedPage, setSelectedPage, pages } =
  usePaginator < TyourDataType > (yourData, countPerPage);
```

4. ### consume the returned pages array (array of arrays, each one represent data in a page) with selectedPage as index

```javascript
<div>
  {!!pages.length &&
    pages[selectedPage].map((item: TyourDataType) => {
      return <Item key={item.id} item={item} />;
    })}
</div>
```

5. ### Paginator component needs pagesCount, selectedPage and setSelectedPage, all are returned from usePaginator. Notice if you have your own logic to calculate these props then you don't need usePaginator

```javascript
{
  pages.length > 1 && (
    <Paginator
      pagesCount={pagesCount}
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
    />
  );
}
```
