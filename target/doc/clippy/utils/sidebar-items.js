initSidebarItems({"constant":[["LL_PATH",""],["MUTEX_PATH",""],["OPEN_OPTIONS_PATH",""],["OPTION_PATH",""],["RESULT_PATH",""],["STRING_PATH",""],["VEC_PATH",""]],"fn":[["expr_block","Like snippet_block, but add braces if the expr is not an ExprBlock Also takes an Option<String> which can be put inside the braces"],["get_enclosing_block",""],["get_item_name","get the name of the item the expression is in, if available"],["get_parent_expr","get a parent expr if any – this is useful to constrain a lint"],["in_external_macro","returns true if the macro that expanded the crate was outside of the current crate or was a compiler plugin"],["in_macro","returns true this expn_info was expanded by any macro"],["is_adjusted",""],["is_from_for_desugar","checks if a `let` decl is from a for loop desugaring"],["is_integer_literal",""],["match_def_path","check if a DefId's path matches the given absolute type path usage e.g. with `match_def_path(cx, id, &[\"core\", \"option\", \"Option\"])`"],["match_impl_method","check if method call given in \"expr\" belongs to given trait"],["match_path","match a Path against a slice of segment string literals, e.g. `match_path(path, &[\"std\", \"rt\", \"begin_unwind\"])`"],["match_path_ast","match a Path against a slice of segment string literals, e.g. `match_path(path, &[\"std\", \"rt\", \"begin_unwind\"])`"],["match_trait_method","check if method call given in \"expr\" belongs to given trait"],["match_type","check if type is struct or enum type with given def path"],["snippet","convert a span to a code snippet if available, otherwise use default, e.g. `snippet(cx, expr.span, \"..\")`"],["snippet_block","convert a span (from a block) to a code snippet if available, otherwise use default, e.g. `snippet(cx, expr.span, \"..\")` This trims the code of indentation, except for the first line Use it for blocks or block-like things which need to be printed as such"],["span_help_and_lint",""],["span_lint",""],["span_note_and_lint",""],["trim_multiline","Trim indentation from a multiline string with possibility of ignoring the first line"],["walk_ptrs_ty","return the base type for references and raw pointers"],["walk_ptrs_ty_depth","return the base type for references and raw pointers, and count reference depth"]]});