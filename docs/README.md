excellent-decorators

# excellent-decorators

## Table of contents

### Type Aliases

- [Logger](https://github.com/alias-rahil/excellent-decorators/blob/main/docs/README.md#logger)

### Functions

- [Freeze](https://github.com/alias-rahil/excellent-decorators/blob/main/docs/README.md#freeze)
- [Seal](https://github.com/alias-rahil/excellent-decorators/blob/main/docs/README.md#seal)
- [Warn](https://github.com/alias-rahil/excellent-decorators/blob/main/docs/README.md#warn)

## Type Aliases

### Logger

Ƭ **Logger**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `warn` | (...`loggerArgs`: `unknown`[]) => `void` |

#### Defined in

[types/logger.ts:1](https://github.com/alias-rahil/awesome-decorators/blob/8c48ee4/src/types/logger.ts#L1)

## Functions

### Freeze

▸ **Freeze**<`T`\>(`target`): `T`

```typescript
@Freeze
class Test {}
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`rest`: `any`[]) => `Record`<`never`, `unknown`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |

#### Returns

`T`

#### Defined in

[freeze.ts:7](https://github.com/alias-rahil/awesome-decorators/blob/8c48ee4/src/freeze.ts#L7)

___

### Seal

▸ **Seal**<`T`\>(`target`): `T`

```typescript
@Seal
class Test {}
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`rest`: `any`[]) => `Record`<`never`, `unknown`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |

#### Returns

`T`

#### Defined in

[seal.ts:7](https://github.com/alias-rahil/awesome-decorators/blob/8c48ee4/src/seal.ts#L7)

___

### Warn

▸ **Warn**(`loggerArgs`, `honourConstructorOptions?`, `silent?`, `logger?`): <T\>(`Target`: `T`) => (...`rest`: `any`[]) => `__class`<`T`\> & `T`

```typescript
@Warn(['Warning: Test is deprecated, use TestV2 instead.'])
class Test {}
```

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `loggerArgs` | `unknown`[] | `undefined` |
| `honourConstructorOptions` | `boolean` | `true` |
| `silent` | `boolean` | `false` |
| `logger` | [`Logger`](https://github.com/alias-rahil/excellent-decorators/blob/main/docs/README.md#logger) | `console` |

#### Returns

`fn`

▸ <`T`\>(`Target`): (...`rest`: `any`[]) => `__class`<`T`\> & `T`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`rest`: `any`[]) => `Record`<`never`, `unknown`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `Target` | `T` |

##### Returns

(...`rest`: `any`[]) => `__class`<`T`\> & `T`

#### Defined in

[warn.ts:9](https://github.com/alias-rahil/awesome-decorators/blob/8c48ee4/src/warn.ts#L9)
