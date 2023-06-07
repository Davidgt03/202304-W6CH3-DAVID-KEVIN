import { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Character } from "../components/models/character";
import { ApiRepository } from "../services/api.repository";
import { AppDispatch, RootState } from "../store/store";
import * as ac from "../redux/reducer";
import { consoleError } from "../../core/services/error";

export function useCharacter() {
  const { characters } = useSelector((state: RootState) => state.character);
  const dispatch: AppDispatch = useDispatch();

  const characterUrl = "http://localhost:3000/characters";

  const repo: ApiRepository<Character> = useMemo(
    () => new ApiRepository<Character>(characterUrl),
    []
  );

  const handleLoad = useCallback(async () => {
    try {
      const loadedCharacter = await repo.getAll();
      dispatch(ac.load(loadedCharacter));
    } catch (error) {
      consoleError(error);
    }
  }, [repo, dispatch]);

  useEffect(() => {
    handleLoad();
  });

  return {
    characters,
    handleLoad,
  };
}
