# PaginatorX #

## Pagination for Chakra-ui done easy ##

### Depends on "@chakra-ui/icons" and "@chakra-ui/react" ###




1. ### first import Paginator component and usePageState hook

```javascript
import { Paginator, usePagesState } from 'chakra-paginatorx';
```

2. ### Your data array using useEffect or custom hook or any other fetch library like react query, and it's type

```javascript
import {TyourDataType} from 'your types folder'
const yourData: TyourDataType[] = useYourUseFetch
```

3. ### feed usePageState hook with data arry and count of items per page

```javascript
const {
    pagesCount,
    selectedPage,
    setSelectedPage,
    pagesArray } = usePagesState<TyourDataType>(
    yourData,
    countPerPage
  );

```

4. ### consume the returned pages array with selected page

```javascript
<div>
 {!!pagesArray.length &&
    pagesArray[selectedPage].map((item: TyourDataType) => {
    return <Item key={item.id} item={item} />;
})}
</div>
```

5. ### Paginator needs pagesCount, selectedPage and setSelectedPage, all are returned from usePaginator

```javascript
{pagesArray.length > 1 && (
<Paginator
    pagesCount={pagesCount}
    selectedPage={selectedPage}
    setSelectedPage={setSelectedPage}
/>
)}
```
